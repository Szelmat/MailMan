package util

import "math"

func FormatTwoDecimalPlaces(val float64) float64 {
	return math.Round(val * 100) / 100
}

