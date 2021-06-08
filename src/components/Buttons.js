

function Buttons(props) {
    const name1 = props.name1;
    const name2 = props.name2;

    
    const flames = ['Sweet', 'Freind', 'Lover', 'Affectionate', 'Marriage', 'Enemy'];
    const hope = ["Ewan", "Hinde", "Oo", "Pwede"];
    const flameshope = ['Ewan', 'Freind', 'Lover', 'Affectionate', 'Marriage', 'Enemy', "Sweet", "Hinde", "Oo", "Pwede"]

    const filterout = () => {
    	let tempname1 = ''
    	let tempname2 = ''
    	for (let i=0; i<name1.length; i++) {
      		if (name2.includes(name1[i])) {
        	continue;
      		}
      		tempname1 += name1[i]
    	}

    	for (let i=0; i<name2.length; i++) {
      		if (name1.includes(name2[i])) {
        		continue;
      		}
      		tempname2 += name2[i]
    	}

        let nameWithoutSpace = '';
        let joined = tempname1 + tempname2;
        for (let i=0; i<joined.length; i++) {
            if (joined[i] != " ") {
                nameWithoutSpace += joined[i]
            }
        }
        console.log(nameWithoutSpace);
        return nameWithoutSpace.length;
    }


    const getResult = (mode, len) => {
        let leftOver = filterout();
        let relationNumber = 0;
        relationNumber = leftOver % len;
        props.toset(mode[relationNumber]);
        
    }

    return (
        <div class="col-12 pb-5 mt-2">
			<input className={props.isactive + " " + "btn btn-primary col-12 mb-3"} type="submit" onClick={() => getResult(flames, 6)} value="FLAMES"/>
            <input className={props.isactive + " " + "btn btn-primary col-12 mb-3"} type="submit" onClick={() => getResult(hope, 4)} value="HOPE"/>
            <input className={props.isactive + " " + "btn btn-primary col-12 mb-3"} type="submit" onClick={() => getResult(flameshope, 10)} value="FLAMESHOPE"/>
            <input className="btn btn-info col-12" type="submit" onClick={props.res} value="Refresh"/>
		</div>
    )
}

export default Buttons;