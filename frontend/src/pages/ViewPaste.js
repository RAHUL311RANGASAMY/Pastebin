import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const ViewPaste = () => {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPaste = async () => {
      try {
        const res = await api.get(`/api/paste/${id}`);
        setPaste(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Paste not found");
      }
    };
    if (id) fetchPaste();
  }, [id]);

  return (
    <div className="container">
      <h2>View Link</h2>

      {error && <p className="error">{error}</p>}

      {paste && (
        <div className="paste-box">
          <textarea readOnly value={paste.content} />
          <h2>Views: {paste.views}</h2>
        </div>
      )}
    </div>
  );
};

export default ViewPaste;
