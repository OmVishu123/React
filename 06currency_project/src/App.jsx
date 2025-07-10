import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'
function App() {

  const [amount, setAmount] = useState("")
  const [fromValue, setFromValue] = useState("usd")
  const [toValue, setToValue] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(fromValue)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFromValue(toValue)
    setToValue(fromValue)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[toValue]))
  }
  return (

    <>
      <div className='flex flex-row  w-full h-screen  justify-center items-center bg-cover bg-center bg-no-repeat' 
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg)' }}>
        <div className='relative right-10 justify-center w-64 h-64 bg-cover mt-10 rounded-lg bg-no-repeat bg-center'
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1560102/pexels-photo-1560102.jpeg)' }}></div>
        <div className=' flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-4 text-white'>Currency Convertor</h1>

        <div className='flex flex-col w-150 h-90 opacity-70 justify-center items-center rounded-xl shadow-xl border border-black bg-gradient-to-r from-white to-gray-600'>
       

            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFromValue(currency)}
              selectCurrency={fromValue}
              onAmountChange={(amount) => setAmount(amount)}
              className=' rounded-lg border border-black '
              
            />
       
          
          <button
          className=' relative z-10 bg-blue-600 rounded-lg p-2 border border-black  text-white -translate-x-1 -translate-y-1/4 hover:bg-blue-700'
           onClick={swap}>Swap</button>
      

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setToValue(currency)}
              selectCurrency={toValue}
              onAmountChange={(convertedAmount) => setAmount(convertedAmount)}
              amountDisable
              className='relative z-0  rounded-lg border border-black  -translate-y-1/4 '
            />
     
          <button className='bg-blue-700 text-xl rounded-lg text-white  m-4 p-4' onClick={()=>convert()}>Convert {fromValue.toUpperCase()} to {toValue.toUpperCase()}</button>

        </div>
</div>
        <div className='ml-10 mt-14 justify-center w-64 h-64  rounded-lg bg-cover'
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/20358174/pexels-photo-20358174.jpeg)' }}></div>
      </div>
    </>
  )
}

export default App
