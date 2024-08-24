import React from 'react'
import styles from "./page.module.css"
import NavBar from '../../../../components/navbar/navbar'
import AnimatedCursor from 'react-animated-cursor'

const HoopsToGloryPage = () => {
  return (
    <div className={styles.page}>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='225, 142, 236'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        showSystemCursor={false}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <NavBar/>

      {/* HoopsToGlory */}
    </div>
  )
}

export default HoopsToGloryPage