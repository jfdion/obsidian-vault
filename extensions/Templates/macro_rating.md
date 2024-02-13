<%*
const tx = tp.user.seanceTemplate()
const value = tx.promptInt(tp, "Rating x / 10")

tR += "Rating::"
tR += "⭐".repeat(value)
