const Role = ({roleData}) => {
    return ( 
    
    <div>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
{roleData.map((item=>(
    <tr  > key = {item.id} 
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.description}</td>
    </tr>
)))}
            </tbody>
        </table>

    </div> );
}
 
export default Role;