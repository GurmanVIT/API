import React, { useEffect } from 'react';
import HttpHelper, { entpoits1 } from '../../common/httphelper';

function Delete(p) {
    useEffect(() => {
    }, [])


    const deleteUser = async () => {
        HttpHelper.delete(entpoits1.deleteProducts + p.id)
    }

    return (
        <div className='Delete'>
            <button onClick={() => { deleteUser() }}>delete</button>
        </div>
    )
}

export default Delete;
