import "react";

// https://fettblog.eu/typescript-react-generic-forward-refs/
declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null,
  ): {
    (props: P & React.RefAttributes<T>): React.ReactNode | null;
    displayName?: string;
  };
}
