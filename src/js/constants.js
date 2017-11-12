const constants = {
  project_info: {
    statement: "helping developers connect with open-source projects"
  },
  app_defaults: {
    page: 1,
    per_page: 10,
    sort_order: '&sort=created&order=desc'
  },
  badge: {
    help_wanted: 'rgb(18, 138, 12)'
  },
  colors: {
    dark: '#1b1c1d',
    light: '#fff'
  },
  links: {
    internal: {
      gh_repo_url: "https://github.com/mac-s-g/github-help-wanted/",
      gh_issues_url: "https://github.com/mac-s-g/github-help-wanted/issues/",
      gh_profile_url: "https://github.com/mac-s-g/",
      license_url: "https://github.com/mac-s-g/github-help-wanted/blob/master/LICENSE",
      site_url: "https://mac-s-g.github.io/github-help-wanted/dist/index.html",
      github_url: "https://github.com/"
    },
    api: {
      issues_url: 'https://api.github.com/search/issues'
    },
    external: {
      "Up For Grabs": "http://up-for-grabs.net/#/",
      "First Timers Only": "http://www.firsttimersonly.com/",
      "How to Contribute": "https://opensource.guide/how-to-contribute/",
      "Get Involved with Tech": "http://getinvolved.hanselman.com/"
    }
  },
  search_filters: {
    languages: [
      'ActionScript',
      'Arduino',
      'ASP',
      'C',
      'C++',
      'C#',
      'Clojure',
      'ClojureScript',
      'CSS',
      'CoffeeScript',
      'Elm',
      'Elixir',
      'Emacs Lisp',
      'Erlang',
      'Fortran',
      'Go',
      'Groovy',
      'Haskell',
      'HTML',
      'Java',
      'JavaScript',
      'Lisp',
      'Lua',
      'Makefile',
      'Matlab',
      'Objective-C',
      'OCaml',
      'Pascal',
      'Perl',
      'PHP',
      'PowerShell',
      'Puppet',
      'Python',
      'R',
      'Ruby',
      'Rust',
      'Scala',
      'Shell',
      'SQL',
      'Swift',
      'TeX',
      'TypeScript',
      'VimL',
      'Visual Basic'
    ],
    labels: [
      "bug",
      "critical",
      "easy",
      "enhancement",
      "difficulty: easy",
      "difficulty: medium",
      "difficulty: hard",
      "discussion",
      "documentation",
      "feature",
      "first-timers-only",
      "good first issue",
      "hard",
      "help wanted",
      "jump-in",
      "new feature",
      "priority: low",
      "priority: medium",
      "priority: high",
      "prs welcome",
      "up for grabs",
      "urgent",
    ],
    sort_order: [
      {
        text: 'Most Commented',
        value: '&sort=comments&order=desc'
      },
      {
        text: 'Newest',
        value: '&sort=created&order=desc'
      },
      {
        text: 'Oldest',
        value: '&sort=created&order=asc'
      },
      {
        text: 'Recently Updated',
        value: '&sort=updated&order=desc'
      },
    ]
  }
}

export {constants as constants}