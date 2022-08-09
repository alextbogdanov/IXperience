import Spinner from "./Spinner";

export default function SubmitButton({ loading }) {
  return (
    <div className="mt-3 d-grid">
      <button className="btn btn-outline-dark fw-bold p-2" type="submit">
        {loading ?
          <Spinner />
          :
          <>
            Submit
          </>
        }
      </button>
    </div>
  )
}
