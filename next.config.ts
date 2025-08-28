import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages에서 서브디렉토리에 호스팅하는 경우 basePath를 설정해야 합니다.
  // 예: https://<username>.github.io/<repository-name>
  // 이 경우, basePath: '/<repository-name>',
  // assetPrefix: '/<repository-name>/' 와 같이 설정합니다.
  // 현재 프로젝트는 shryu.github.io 이므로, basePath는 필요하지 않습니다.
};

export default nextConfig;
