import { useState } from "react";
import Alert from "../../messages/Alert";
import Success from "../../messages/Success";

const FCSendRequest = () => {
  const [sendHanlde, setSendHanlde] = useState("");
  const succesMessage = "Request sent successfully";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSendRequest = () => {
    console.log(sendHanlde);

    if (sendHanlde === "emma") {
      setSuccess(true);
      setError(null);
    } else {
      setSuccess(false);
      let responseError = { message: "User not found" };
      setError(responseError);
    }

    setSendHanlde("");
  };

  const handleOk = () =>{
    setSuccess(false);
    setError(null);
  }
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-400 to-blue-400 py-10 px-4 rounded-lg shadow-md">
        <h1 className="text-xl text-left text-slate-700 text-semibold my-2">
          Send Connection Request
        </h1>
        <div>
          <input
            type="text"
            placeholder="User handle"
            className="input"
            autoFocus
            value={sendHanlde}
            onChange={(e) => setSendHanlde(e.target.value)}
          />

          <button className="btn mt-2" onClick={handleSendRequest}>
            Send Request
          </button>
        </div>

        <div>
          {error && <Alert msg={error.message} />}
          {success && <Success msg={succesMessage} />}
        </div>

        <div>
          {(error || success) && <button className="btn mt-2" onClick={handleOk}>
            Ok
          </button>}
        </div>
      </div>
    </div>
  );
};

export default FCSendRequest;
