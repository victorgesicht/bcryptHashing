import bcrypt from 'bcrypt';

async function bcryptHashFunction(){

    const salt=await bcrypt.genSalt(10);
    console.log(salt, salt.length);

    const rawInputHash= await bcrypt.hash('stringToHash', salt);
    console.log(rawInputHash, rawInputHash.length);

}

bcryptHashFunction();
