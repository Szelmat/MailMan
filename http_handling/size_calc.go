package http_handling

func CalcSizeKb(content string) float64 {
  bodySizeBytes := len(content)
  return float64(bodySizeBytes) / 1024
}

