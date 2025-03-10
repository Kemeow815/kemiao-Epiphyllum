declare module 'pagefind' {
    interface PagefindSearchResult {
      results: Array<{
        id: string
        data: () => Promise<{
          url: string
          meta: { title: string }
          excerpt: string
        }>
      }>
    }
  
    interface PagefindInstance {
      search: (query: string) => Promise<PagefindSearchResult>
      preload: (query: string) => void
    }
  
    interface PagefindStatic {
      init: (options?: {
        bundlePath?: string
        forceLanguage?: string
      }) => Promise<PagefindInstance>
    }
  
    const Pagefind: PagefindStatic
    export = Pagefind
  }