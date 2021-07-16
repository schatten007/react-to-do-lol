
function Footer({totalDone, total}){
    return(
        <div>
            <h3>{totalDone} out of {total} tasks done</h3>
        </div>
    );
}

export default Footer;