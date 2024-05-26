import { ReactNode, Suspense, SuspenseProps } from "react";
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithRender,
} from "react-error-boundary";

type ErrorBoundaryExceptFallbackProps = Omit<
  ErrorBoundaryPropsWithRender,
  "fallbackRender" | "fallback" | "FallbackComponent"
>;

type AsyncBoundaryProps = {
  children: ReactNode;
  ErrorFallback: ErrorBoundaryPropsWithRender["fallbackRender"];
  SuspenseFallback: SuspenseProps["fallback"];
} & ErrorBoundaryExceptFallbackProps;

/**
 * @see https://varletc0nst.tistory.com/entry/React-Suspense%EC%99%80-ErrorBoundary%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A1%9C%EB%94%A9-UI%ED%91%9C%ED%98%84%EA%B3%BC-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81-2
 * @see https://jbee.io/react/error-declarative-handling-1/
 */
const AsyncBoundary = ({
  children,
  ErrorFallback,
  SuspenseFallback,
  ...restErrorBoundaryProps
}: AsyncBoundaryProps) => (
  <ErrorBoundary fallbackRender={ErrorFallback} {...restErrorBoundaryProps}>
    <Suspense fallback={SuspenseFallback}>{children}</Suspense>
  </ErrorBoundary>
);

export default AsyncBoundary;