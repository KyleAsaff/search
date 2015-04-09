{
  search:[
    {
      type: 'file',
      query:'https://m.box.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'[data-item-type="file"] h3.files-item-name',
        expression:'$(element).text()'
      },
      description:{
        selector:'[data-item-type="file"] span.subtitle',
        expression:'$(element).text()'
      },
      link:{
        selector:'[data-item-type="file"] a.files-item-anchor',
        expression:'"https://m.box.com" + $(element).attr("href")'
      }
    },
    {
      type: 'folder',
      query:'https://m.box.com/search?q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'[data-item-type="folder"] h3.files-item-name',
        expression:'$(element).text()'
      },
      description:{
        selector:'[data-item-type="folder"] span.subtitle',
        expression:'$(element).text()'
      },
      link:{
        selector:'[data-item-type="folder"] a.files-item-anchor',
        expression:'"https://m.box.com" + $(element).attr("href")'
      }
    }
  ]
}