
import styles from '../styles/ItemDetailsBox.module.css'
import classnames from 'classnames';

export default function ItemDetailBox({ 
  title, 
  subtitle, 
  color
}) {


  return (

    <>
    <div className={ classnames( styles['itemdetailbox2'], styles['itemdetailbox'] ) }>
      <h4 className={ styles['main-title'] }>{title}</h4>
      <p className={ styles['sub-title'] }>{subtitle}</p>
    </div>
    </>
    
  )
}