// first quotes API


const getQuotes = async(url)=> {  
  const res = await fetch(url);
  const quote = await res.json(); 
  return quote
}

const url = 'https://type.fit/api/quotes'


try{
  const data = await getQuotes(url)
  console.log(data[3].text)
  const qotd = document.querySelector('.quote');
  qotd.textContent = `"${data[3].text}"`;
  const author = document.querySelector('.author');
  author.textContent = `${data[3].author}`;
} catch(error){
  console.log(error.message)
}



// second API

// const getQuotes = async(url)=> {  
//   // const quotes = 'data.json';
//   const res = await fetch(url);
//   const quote = await res.json(); 
//   return quote
// }

// const url = 'https://favqs.com/api/qotd'
// try{
//   const data = await getQuotes(url)
//   console.log(data)
// } catch(error){
//   console.log(error.message)
// }


