export default function UploadPresenter(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="file" onChange={props.handleFileChange} />
            <button type="submit">업로드</button>
        </form>
    )
}