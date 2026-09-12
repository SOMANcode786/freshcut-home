export function notFound(req,res) { res.status(404).json({message:'Route not found'}); }
export function handleError(error,req,res,next) {
  if (error.code === 'P2025') return res.status(404).json({message:'Record not found'});
  if (error.type === 'entity.parse.failed') return res.status(400).json({message:'Invalid JSON body'});
  if (error.type === 'entity.too.large') return res.status(413).json({message:'Request body is too large'});
  if (error.status === 400) return res.status(400).json({message:error.message});
  console.error('API request failed:', error.code || error.name || 'Unknown error');
  res.status(500).json({message:'Something went wrong'});
}
