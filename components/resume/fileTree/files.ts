export type TFiles = {
  name: string;
  children?: TFiles[]
}

export const files: TFiles = {
  name: "root",
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: ".bin"
        },
        {
          name: ".cache"
        }
      ]
    },
    {
      name: "public",
      children: [
        {
          name: "index.html"
        },
        {
          name: "robots.tsx"
        }
      ]
    },
    {
      name: "src",
      children: [
        {
          name: "components",
          children: [
            {
              name: "pages",
              children: [
                {
                  name: "login.tsx"
                },
                {
                  name: "dashboard.tsx"
                },
                {
                  name: "404.tsx"
                }
              ]
            },
            {
              name: "partials",
              children: [
                {
                  name: "contact.tsx"
                }
              ]
            },
            {
              name: "shared",
              children: [
                {
                  name: "footer.tsx"
                },
                {
                  name: "navigation.tsx"
                },
                {
                  name: "form.tsx"
                }
              ]
            },
            {
              name: "types"
            }
          ]
        },
        {
          name: "context",
          children: [
            {
              name: "user.tsx"
            },
            {
              name: "theme.tsx"
            }
          ]
        },
        {
          name: "App.tsx",
        },
        {
          name: "index.tsx"
        },
        {
          name: "globals.d.ts"
        }
      ]
    },
    {
      name: "tests"
    },
    {
      name: ".gitignore"
    },
    {
      name: "package-lock.json"
    },
    {
      name: "package.json"
    },
    {
      name: "README.md"
    },
    {
      name: "tsconfig.json"
    },
  ]
}