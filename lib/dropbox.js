{
  search:[
    {
      type:'file',
      query:'https://www.dropbox.com/m/search?path=%2F&search_string={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.file h4',
        expression:'$(element).text()'
      },
      description:{
        selector:'.file a.ui-link-inherit',
        expression:'$(element).attr("href").substring(24, $(element).attr("href").indexOf("?")) + " | " + $(element).find("p").text()'
      },
      link:{
        selector:'.file a.ui-link-inherit',
        expression:'$(element).attr("href")'
      }
    },
    {
      type:'folder',
      query:'https://www.dropbox.com/m/search?path=%2F&search_string={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.folder h4.ui-li-heading',
        expression:'$(element).text()'
      },
      description:{
        selector:'.folder a.ui-link-inherit',
        expression:'decodeURIComponent($(element).attr("href").replace("/m/browse?path=", "")).substr(1)'
      },
      link:{
        selector:'.folder a.ui-link-inherit',
        expression:'"https://www.dropbox.com" + decodeURIComponent($(element).attr("href").replace("m/browse?path=", "home").replace("+"," "))'
      }
    }
  ]
}