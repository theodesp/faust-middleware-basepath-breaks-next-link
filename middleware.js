// middleware.ts
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("here 1: ", request);

  // if (request.nextUrl.pathname.includes('/blog/')) {
  //   const paths = request.nextUrl.pathname.split('/');

  //   const newPathSegments = paths.filter((segment) => segment !== 'blog');

  //   const newPathname = '/blog' + newPathSegments.join('/');

  //   console.log('here newPath: ', newPathname);

  //   const newUrl = new URL(newPathname, request.url);

  //   console.log('here newUrl: ', newUrl.href);

  //   return NextResponse.rewrite(newUrl);
  // }
  // return;
}
