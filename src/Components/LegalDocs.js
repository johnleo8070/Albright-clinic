import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LegalDocs() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the new Terms of Service page
    navigate('/terms-of-service', { replace: true });
  }, [navigate]);

  return null; // This component doesn't render anything as it redirects immediately
}

export default LegalDocs;