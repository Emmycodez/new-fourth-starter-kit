"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

const QRScanner = () => {
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQRCode = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/whatsapp-qr`);
      if (response.ok) {
        console.log("This is the qr code response",response)
        const data = await response.json();
        setQrCode(data.qrCode);
      } else {
        console.error('QR code not found');
      }
    } catch (error) {
      console.error('Error fetching QR code:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQRCode();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading QR code...</p>
      ) : qrCode ? (
        <Image src={qrCode} alt="QR Code" width={300} height={300} />
      ) : (
        <p>No QR code available</p>
      )}
    </div>
  );
};

export default QRScanner;
