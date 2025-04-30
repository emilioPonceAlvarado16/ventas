import { useState, useEffect } from 'react';

export default function ViewData() {
  const [logs, setLogs] = useState([]);
  const [capturas, setCapturas] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      // Cargar logs
      const logsRes = await fetch('/api/get-logs');
      const logsData = await logsRes.json();
      setLogs(logsData);

      // Cargar capturas
      const capturasRes = await fetch('/api/list-capturas');
      const capturasData = await capturasRes.json();
      setCapturas(capturasData);

    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Datos de Desarrollo</h1>
      <button 
        onClick={loadData}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Actualizar Datos
      </button>

      <div className="space-y-8">
        {/* Sección de Logs */}
        <div>
          <h2 className="text-xl font-bold mb-2">Registros de Geolocalización</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {logs.length === 0 ? (
              <p className="text-gray-500">No hay registros disponibles</p>
            ) : (
              <div className="space-y-2">
                {logs.map((log, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow">
                    <p><strong>Fecha:</strong> {new Date(log.timestamp).toLocaleString()}</p>
                    <p><strong>Ubicación:</strong> {log.lat}, {log.lng}</p>
                    <p><strong>IP:</strong> {log.ip}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sección de Capturas */}
        <div>
          <h2 className="text-xl font-bold mb-2">Capturas de Cámara</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {capturas.length === 0 ? (
              <p className="text-gray-500">No hay capturas disponibles</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {capturas.map((captura, index) => (
                  <div key={index} className="bg-white p-2 rounded shadow">
                    <img
                      src={captura.url}
                      alt={`Captura ${index}`}
                      className="w-full h-32 object-cover rounded"
                    />
                    <p className="mt-2 text-sm text-gray-600 truncate">{captura.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-xl">Cargando datos...</p>
        </div>
      )}
      
      <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
        <p className="text-yellow-800 text-sm">
          ⚠️ Advertencia: Los datos son temporales y se borrarán al realizar un nuevo deploy o reiniciar el servidor.
        </p>
      </div>
    </div>
  );
}