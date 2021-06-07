

function Buttons(props) {
    const name1 = props.name1;
    const name2 = props.name2;

    
    const flames = ['Sweet', 'Freind', 'Lover', 'Affectionate', 'Marriage', 'Enemy'];
    const hope = ["Hinde", "Oo", "Pwede", "Ewan"];

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

        let nameWithoutSpace = ''
        let joined = tempname1.length + tempname2.length;
        for (let i=0; i<nameWithoutSpace.length; i++) {
            if (joined[i] != " ") {
                nameWithoutSpace += joined[i]
            }
        }

        return nameWithoutSpace;
    }


    const getResult = (mode, len) => {
        let leftOver = filterout();
        let relationNumber = 0;
        relationNumber = leftOver % len;
        props.toset(mode[relationNumber])
    }

    return (
        <div class="btn-group col-12 mb-3 mt-3">
			<input className={props.isactive + " " + "btn btn-primary border-end bordr-dark outline-dark"} type="submit" onClick={() => getResult(flames, 6)} value="FLAMES"/>
            <input className="btn btn-primary" type="submit" onClick={props.res} value="Refresh"/>
			<input className={props.isactive + " " + "btn btn-primary border-start border-dark outline-dark"} type="submit" onClick={() => getResult(hope, 4)} value="HOPE"/>
		</div>
    )
}

export default Buttons;