# 개발 및 배포 규칙

이 프로젝트는 Vanilla JavaScript와 Vite를 사용합니다. 이후 코드 작업은 다음 규칙을 따릅니다.

- HTML은 프로젝트 루트의 `index.html`에 작성합니다.
- 애플리케이션의 CSS와 JavaScript는 `src` 폴더에 각각 별도 파일로 작성합니다.
- JavaScript는 ES 모듈로 연결하고, CSS는 JavaScript 진입 파일에서 import하여 Vite 빌드에 포함합니다.
- 외부 JavaScript 라이브러리가 필요하면 npm 패키지로 설치하고 import합니다. CDN은 사용하지 않습니다.
- 기존 파일과 설정을 먼저 확인하고 필요한 부분만 수정합니다.
- `vite.config.js` 등 도구 설정 파일은 프로젝트 루트에 둡니다.

## Netlify 배포 설정

- Build command: `npm run build`
- Publish directory: `dist`
