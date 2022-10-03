import NextDocument, { DocumentContext, DocumentInitialProps } from 'next/document';
import { GLOBAL_NAME, PROP_NAME } from './constants';

type CreateInitialState = (appProps: any) => any;

export const createGetInitialProps =
  (createInitialState: CreateInitialState) => async (ctx: DocumentContext) => {
    const appData = { props: {} };
    const originalRenderPage = ctx.renderPage;
    const enhanceComponent = (Component: any) => Component;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => ((appData.props = props), (<App {...props} />)),
        enhanceComponent,
      });

    try {
      await NextDocument.getInitialProps(ctx);
    } catch {
      // do nothing
    }

    const state = await createInitialState(appData.props);
    const extraProps = { [PROP_NAME]: state };

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => <App {...props} {...extraProps} />,
        enhanceComponent,
      });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      head: [
        ...(initialProps.head || []),
        <script
          dangerouslySetInnerHTML={{
            __html: `window.${GLOBAL_NAME}=${JSON.stringify(state)};`,
          }}
        />,
      ],
    } as DocumentInitialProps & Pick<Required<DocumentInitialProps>, 'head'>;
  };
