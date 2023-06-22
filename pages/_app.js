import { createContext ,useEffect,useState} from "react"

const Context = createContext()

export default function App({ Component, pageProps }) {
  const [dataCard, setdataCard] = useState([]);

  const handleCardClick = (item, event) => {
  const isItemChecked = dataCard.some((favItem) => favItem.id === item.id);
  if (!isItemChecked) {
    setdataCard((prevDatafav) => [...prevDatafav, item]);
  } else {
    setdataCard((prevDatafav) =>
      prevDatafav.filter((favItem) => favItem.id !== item.id)
    );
  }
};

const removeCardData = (item) => {
  const updatedData = dataCard.filter((data) => data.id !== item.id);
  setdataCard(updatedData);
};




  const [datafav, setdatafav] = useState([]);
  // useMemo(()=>{
  //   favCount(datafav?.length)
  // },[datafav])
  const handleFavoriteClick = (item, event) => {
  const isItemChecked = datafav.some((favItem) => favItem.id === item.id);
  if (!isItemChecked) {
    setdatafav((prevDatafav) => [...prevDatafav, item]);
  } else {
    setdatafav((prevDatafav) =>
      prevDatafav.filter((favItem) => favItem.id !== item.id)
    );
  }
};
const removeData = (item) => {
  const updatedData = datafav.filter((data) => data.id !== item.id);
  setdatafav(updatedData);
};

 const [ CardData, setCardData] = useState([])

 const SendAddToCard = (item) => {
  setCardData((prevData) => [...prevData, item]);
};


const [TotalPrice, setTotalPrice] = useState(0);
const [counts, setCounts] = useState(CardData.map(() => 1));
const [counts2, set2Counts] = useState(dataCard.map(() => 1));
const [ CardClosed, setCardClosed] = useState(dataCard || [])
const [ CardClose, setCardData2 ] = useState(CardData || [])
useEffect(() => {
  setCounts(CardData.map(() => 1));
}, [CardData]);

useEffect(() => {
  set2Counts(dataCard.map(() => 1));
}, [dataCard]);


useEffect(() => {
  setCardData2(CardData || []);
}, [CardData]);
useEffect(() => {
  setCardClosed(dataCard || []);
}, [dataCard]);

const removeItem = (index) => {
  setCardData2((prevCardData) =>
    prevCardData.filter((_, i) => i !== index)
  );

}
console.log(CardData, "CardData")
console.log(CardClose, "CardClose")

  return (
    <Context.Provider value={{handleFavoriteClick, datafav, removeData, SendAddToCard, CardData, handleCardClick, dataCard, removeCardData,setCardData2,counts, setCounts ,counts2, set2Counts,CardClose,removeItem, setCardClosed, CardClosed, TotalPrice, setTotalPrice }}>
     <Component {...pageProps} />
    </Context.Provider >
  )
}
export {Context};
