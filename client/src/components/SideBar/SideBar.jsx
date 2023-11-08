import './style.css'
export default function SideBar() {
  return (
    <div className='sidebar'>
      <input placeholder='Найти' type='text' className='map-search'></input>
      <div className={"sidebar-content"}>
        <div className="sidebar__image">
            
        </div>
      </div>
    </div>
  )
}
