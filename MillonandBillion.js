import React from 'react'

function MillonandBillion() {


    function test(labelValue) {
        const sign = Math.sign(Number(labelValue));
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e9
          ? sign * (Math.abs(Number(labelValue)) / 1.0e9) + "B"
          : // Six Zeroes for Millions
          Math.abs(Number(labelValue)) >= 1.0e6
          ? sign * (Math.abs(Number(labelValue)) / 1.0e6) + "M"
          : // Three Zeroes for Thousands
          Math.abs(Number(labelValue)) >= 1.0e3
          ? sign * (Math.abs(Number(labelValue)) / 1.0e3) + "K"
          : Math.abs(Number(labelValue));
      }

      const num = test(12323432262)

  return (
    <div>
       <h1>{num}</h1>
    </div>
  )
}

export default MillonandBillion