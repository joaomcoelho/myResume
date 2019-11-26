# My Resume as a React App

A React App that generates a nice looking resume as a web page and/or as PDF file.
## Getting Started
### Installing
```
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The resume can be exported as PDF using the button "Print" at the top right corner of the resume.

### Resume Data Structure
This is the main json data structure used to generate the resume, you can edit according to your profile, experience, skills etc...

```json
{ 
   "name": "string",
   "street": "string",
   "dateOfBirth": "string",
   "placeOfBirth": "string",
   "nationality": "string",
   "contact": "string",
   "email": "string",
   "linkedin": "string",
   "github": "string",
   "summary":[ 
      { 
         "quote": "string"
      },
   ],
   "experiences":[ 
      { 
         "img": "string",
         "title": "string",
         "dateStart": "string",
         "dateEnd": "string",
         "bullets":[ 
            { 
               "description": "string"
            },
         ]
      },
   ],
   "programmingSkills":[ 
      { 
         "title": "string",
         "score": "decimal"
      },
   ],
   "webSkills":[ 
      { 
         "title": "string",
         "score": "decimal"
      },
   ],
   "loadingSkills":[ 
      { 
         "title": "string",
         "score": "decimal"
      }
   ],
   "dataModelSkills":[ 
      { 
         "title": "string",
         "score": "decimal"
      }
   ],
   "dataManagementSkills":[ 
      { 
         "title": "string",
         "score": "decimal"
      },
   ],
   "languages":[ 
      { 
         "title": "string",
         "score": "decimal"
      },
   ],
   "education":[ 
      { 
         "img": "string",
         "course": "string",
         "university": "string",
         "dateStart": "string",
         "dateEnd": "string",
         "description": "string",
         "courses": "string"
      }
   ],
   "activities":[ 
      { 
         "description": "string"
      },
   ],
   "projects":[ 
      { 
         "title": "string",
         "description": "string"
      }
   ],
   "keywords":[ 
      "string"
   ]
}
```

## Authors
* **João André Coelho** - *My Resume as a React App* - [joaomcoelho](https://github.com/joaomcoelho)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

