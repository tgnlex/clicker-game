


function Sidebar(props) {
  return (
    <aside id={props.id} class="sidebar">
    {props.children}
    </aside>
  )
}

export default Sidebar;
