export default function Friend({ friend }) {

    const { name, email } = friend;

    return (
        <div style={{ border: '2px solid yellow' }} className="box">
            <h4>Name:  {name} </h4>
            <p>Email:  {email} </p>
        </div>
    )
}