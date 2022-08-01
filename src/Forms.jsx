import React, { useState } from "react";
const Forms=()=>{
    let [date,setDate]=useState();
    let [amount,setamount]=useState();
    let [payment,setpayment]=useState();
    let [remarks,setremarks]=useState();
    let [userData,setUserdata]=useState([]);
    let handleSubmit=(e)=>{
        e.preventDefault();
        let temp=[...userData];
        let payload={date:date,amount:amount,payment:payment,remarks:remarks};
        temp.push(payload)
        setUserdata(temp);
        // setDate('');
        // setamount('');
        // setpayment('');
        // setremarks('');
        
    }
    console.log(userData);
    return(
        <>
        <div className="form">
            <h3 style={{textDecoration:'underline'}}>Receipt Details</h3><br />
            <form>
                <label htmlFor="date">Date <span>*</span></label>
                <input type='text' placeholder="Enter Date" id="date" required value={date} onChange={e=>setDate(e.target.value)}/><br />
                <label htmlFor="amount">Amount <span>*</span></label>
                <input type="text" placeholder="Enter Amount (in INR)" id="amount" value={amount} onChange={e=>setamount(e.target.value)} required /><br />
                <label htmlFor="pay">Payment Mode <span>*</span></label>
                <select name="modes" id="pay" value={payment} onChange={e=>setpayment(e.target.value)} required>
                    <option value="Cash">Cash</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="UPI">UPI</option>
                </select><br />
                <label htmlFor="remarks">Remark</label>
                <input type="text" value={remarks} onChange={e=>setremarks(e.target.value)} placeholder="Enter Remark" id="remarks" /><br />
                <button id="can">Cancel</button>
                <button id="sub" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        <div className="table">
            {userData.map((data,index)=>{
                let{date,amount,payment,remarks}=data;
                return(
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>date</th>
                                <th>amount</th>
                                <th>payment</th>
                                <th>remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={index}>
                                <td>{date}</td>
                                <td>{amount}</td>
                                <td>{payment}</td>
                                <td>{remarks}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
        </>
    )
}
export default Forms;