const bcrypt= require ('bcrypt');

async function bcryptHashFunction(){

    const salt=await bcrypt.genSalt(10);
    console.log(salt, salt.length);

    const rawInputHash= await bcrypt.hash('abc', salt);
    console.log(rawInputHash, rawInputHash.length);

}

bcryptHashFunction();
