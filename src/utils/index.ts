import { toast } from 'react-toastify'

export function handleError(payload) {
	if (Array.isArray(payload)) {
		payload.forEach((errorMessage) => {
			toast.error(errorMessage)
		})
	} else if (typeof payload === 'string') {
		toast.error(payload)
	}
}
