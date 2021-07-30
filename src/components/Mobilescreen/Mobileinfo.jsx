import React from 'react'

const Mobileinfo = () => {
    return (
        <div>
            <div className = 'col-md-12 col-12 mx-auto' >
    
    <div className="embed-responsive embed-responsive-16by9" style = {{justifySelf:'center'}}>
<iframe width ='100%' height = '300px'  title="Embeds Page"  className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg"
allowfullscreen style ={{marginTop:'20px', borderRadius:'13px'}}></iframe>


</div>
</div>
<div className = 'col-md-12 col-12 mx-auto'>
                    <h1 style = {{marginTop:'5px', textAlign:'center'}}> Why Make a Will?</h1>
                    <div className = 'content' style = {{marginTop:'50px'}} >
                        <p style = {{width:'100%',fontSize:'1.3rem', textAlign:'center',justifyContent:'center'}}>A person should make a WILL, as it not only helps to
distribute his property according to his wishes but also
ensures the interest of the people you care about is
taken care of after your death.</p>
<p style = {{width:'100%',fontSize:'1.3rem', textAlign:'center',justifyContent:'center'}}>
PANDEMIC has shown that life is uncertain, therefore
it is necessary to define who should inherit your hardened
belongings and assets after you pass away.</p>
                    </div>
</div>
        </div>
    )
}

export default Mobileinfo
