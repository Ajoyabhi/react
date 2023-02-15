import './../style/heading.css'

function Heading(){

    // let styles = {
    //     headingstyle : {
    //         color: "blue",
    //         backgroundColor: "red"
    //     },
    
    //     paraStyle : {
    //         fontSize: "2rem"
    //     }
        

    // }
    let isUserRegistered = false;
    let headingclass;


    if(isUserRegistered){
        headingclass = "main-heading"
    }
    else{
        headingclass = "main-heading-2"
    }
    


    return (
        <>
            <h1 className={headingclass}>Welcome to React</h1>
            <p className="para-style">
                React is very intresting you will love it.
            </p>
            <button> Click me</button>
            <div>
                <h2>Hope you are understanding react!</h2>
            </div>

        </>

    )
}

export default Heading;