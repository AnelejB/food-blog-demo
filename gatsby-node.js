/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
 // Query for nodes to use in creating pages.
 resolve(
   graphql(request).then(result => {
     if (result.errors) {
       reject(result.errors)
     }
     return result;
   })
 )
});

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
 const { createPage } = actions;

// Create pages for each blog.
 const getBlog = makeRequest(graphql, `
   {
     allContentfulBlog (
       sort: { fields: [createdAt], order: DESC }
       filter: {
         node_locale: {eq: "en-US"}},)
     {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
   `).then(result => {
   result.data.allContentfulBlog.edges.forEach(({ node }) => {
     createPage({
       path: `blog/${node.slug}`,
       component: path.resolve(`src/templates/blog.js`),
       context: {
         id: node.id,
       },
     })
   })
});

// Create archive page for all blogs, including pagination
const getArchive = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}},)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/archive.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

// Create Brzi rucak category page, including pagination
const getBrzirucak = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}
      category: {elemMatch: {title: {eq: "Brzi Rucak"}}}
    },)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/brzi-rucak` : `/category/brzi-rucak/${i + 1}`,
      component: path.resolve("./src/templates/brzirucak.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

// Create Hrana za bebe category page, including pagination
const getHranazabebe = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}
      category: {elemMatch: {title: {eq: "Hrana za Bebe"}}}
    },)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/hrana-za-bebe` : `/category/hrana-za-bebe/${i + 1}`,
      component: path.resolve("./src/templates/hranazabebe.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

// Create Posna jela category page, including pagination
const getPosnajela = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}
      category: {elemMatch: {title: {eq: "Posna Jela"}}}
    },)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/posna-jela` : `/category/posna-jela/${i + 1}`,
      component: path.resolve("./src/templates/posnajela.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});


// Create Poslastice category page, including pagination
const getPoslastice = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}
      category: {elemMatch: {title: {eq: "Poslastice"}}}
    },)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/poslastice` : `/category/poslastice/${i + 1}`,
      component: path.resolve("./src/templates/poslastice.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

// Create hleb i pecivo category page, including pagination
const getHlebipecivo = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}
      category: {elemMatch: {title: {eq: "Hleb i Pecivo"}}}
    },)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/hleb-i-pecivo` : `/category/hleb-i-pecivo/${i + 1}`,
      component: path.resolve("./src/templates/hlebipecivo.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

// Create slana jela category page, including pagination
const getSlanajela = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}
      category: {elemMatch: {title: {eq: "Slana Jela"}}}
    },)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/slana-jela` : `/category/slana-jela/${i + 1}`,
      component: path.resolve("./src/templates/slanajela.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

// Create supe i corbe category page, including pagination
const getSupeicorbe = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}
      category: {elemMatch: {title: {eq: "Supe i Corbe"}}}
    },)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/supe-i-corbe` : `/category/supe-i-corbe/${i + 1}`,
      component: path.resolve("./src/templates/supeicorbe.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

// Create prilozi i salate category page, including pagination
const getPriloziisalate = makeRequest(graphql, `
{
  allContentfulBlog (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}
      category: {elemMatch: {title: {eq: "Prilozi i Salate"}}}
    },)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/prilozi-i-salate` : `/category/prilozi-i-salate/${i + 1}`,
      component: path.resolve("./src/templates/priloziisalate.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

 return Promise.all([
   getBlog,
   getArchive,
   getBrzirucak,
   getPosnajela,
   getHranazabebe,
   getPoslastice,
   getHlebipecivo,
   getSlanajela,
   getSupeicorbe,
   getPriloziisalate
  ])
};