import { AppProps } from 'next/app';
import NextDocument, { DocumentContext, DocumentInitialProps } from 'next/document';
import { GLOBAL_NAME, PROP_NAME } from '../constants';

type CreateInitialState = (appProps: AppProps<any> | undefined, ctx: DocumentContext) => any;

export const createGetInitialProps =
  (createInitialState: CreateInitialState) => async (ctx: DocumentContext) => {
    const originalRenderPage = ctx.renderPage;
    let appProps;

    ctx.renderPage = ({ enhanceApp, enhanceComponent }: any) =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => {
          appProps = props;
          const EnhancedApp = enhanceApp?.(App) || App;
          return <EnhancedApp {...props} />;
        },
        enhanceComponent,
      });

    try {
      await NextDocument.getInitialProps(ctx);
    } catch {
      // do nothing
    }

    const state = await createInitialState(appProps, ctx);
    const extraProps = { [PROP_NAME]: state };

    ctx.renderPage = ({ enhanceApp, enhanceComponent }: any) =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => {
          const EnhancedApp = enhanceApp?.(App) || App;
          return <EnhancedApp {...props} {...extraProps} />;
        },
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
