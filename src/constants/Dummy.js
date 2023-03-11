export const portfolio = {
    balance :'32761.65',
    changes :'+20%',
    type:'I'
}


export const coins = [
{
    id:1,
    currency:'Python Programming',
    symbol:'BTC',
    image: require("../assets/icons/book.png"),
    amount :'34.50',
},
{
    id:2,
    currency:'Energy and Environment',
    symbol:'ETH',
    image: require("../assets/icons/book.png"),
    amount :'4130',
    
    type :'D', //I = increase , D = Decrease
    wallet:{
        value:'8200.10',
        crypto:'2'
    }
},
{
    id:3,
    currency:'Introduction to Java',
    symbol:'BNB',
    image: require("../assets/icons/book.png"),
    amount :'501',
    
    type :'I', //I = increase , D = Decrease
    wallet:{
        value:'3256',
        crypto:'6.3'
    }
},
{
    id:4,
    currency:'Operating system',
    symbol:'Doge',
    image: require("../assets/icons/book.png"),
    amount :'2421',
    
    type :'I', //I = increase , D = Decrease
    wallet:{
        value:'4273.10',
        crypto:'1203'
    }
},
{
    id:5,
    currency:'KLE Library',
    symbol:'Doge',
    image: require("../assets/icons/book.png"),
    amount :'2421',
    
    type :'I', //I = increase , D = Decrease
    wallet:{
        value:'4273.10',
        crypto:'1203'
    }
},


]

const bnb_price = '450'
const dummyData = { portfolio,coins,bnb_price}

export default dummyData