import { AppProps } from 'next/app';
import NextDocument, { DocumentContext, DocumentInitialProps } from 'next/document';
import { GLOBAL_NAME, PROP_NAME } from '../constants';

type CreateInitialState = (ctx: DocumentContext, appProps: AppProps<any> | undefined) => any;

export const createGetInitialProps =
  (createInitialState: CreateInitialState) => async (ctx: DocumentContext) => {
    const originalRenderPage = ctx.renderPage;
    let appProps;

    ctx.renderPage = ({ enhanceComponent }: any) =>
      originalRenderPage({
        enhanceApp: () => (props: any) => {
          appProps = props;
          return null;
        },
        enhanceComponent,
      });

    await NextDocument.getInitialProps(ctx);
    const state = await createInitialState(ctx, appProps);
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
          type="application/json"
          id={GLOBAL_NAME}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(state) }}
        />,
      ],
    } as DocumentInitialProps & Pick<Required<DocumentInitialProps>, 'head'>;
  };
