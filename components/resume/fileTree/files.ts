export type TFiles = {
  name: string;
  children?: TFiles[]
}

export const files: TFiles = {
  name: "root",
  children: [
    {
      name: "components",
      children: [
        {
          name: "education",
          children: [
            {
              name: "education.tsx",
            }            
          ],
        },
        {
          name: "workExperience",
          children: [
            {
              name: "workExperience.tsx",
            }            
          ],
        },
        {
          name: "skills",
          children: [
            {
              name: "skills.tsx",
            }            
          ],
        },
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
                  name: "about.tsx"
                },
                {
                  name: "skills.tsx"
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
      name: "README.md"
    }
  ]
}