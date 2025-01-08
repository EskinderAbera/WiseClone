import React from "react";
import { Asset } from "expo-asset";

interface AnimateLoaderProps {
  children: React.ReactNode;
  image?: {
    uri: string;
  };
}

export default function AnimateLoader({ children, image }: AnimateLoaderProps) {
  const [isSplashReady, setSplashReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      await Asset.fromURI(image.uri).downloadAsync();
      setSplashReady(true);
    }

    prepare();
  }, [image]);

  if (!isSplashReady) {
    return null;
  }

  return <>{children}</>;
}
