export default function UserChildren({name, age, children}){
    return(
            <div>
                Hello, my name is {name} and I'm {age} years old. {children ? children : ""}
            </div>
        
    )
}