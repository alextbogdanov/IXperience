export default function Alert({ message }) {
  return (
    <div className="alert alert-primary" role="alert">
        {message}
    </div>
  );
}
