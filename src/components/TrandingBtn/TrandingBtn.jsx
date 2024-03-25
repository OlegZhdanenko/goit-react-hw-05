import css from "../TrandingBtn/TrandingBtn.module.css"
export default function TrandingBtn({ onTranding }) {
    return (
        <div className={css.list}>
            <button className={css.btn} type="button" onClick={()=>onTranding("day")}>Tranding today</button>
            <button className={css.btn} type="button" onClick={()=>onTranding("week")}>Tranding week</button>
        </div>
    )
}