import React, { useState, useEffect } from 'react';
import { RestApi } from '../components/RestApi'

const Feedback: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);

  const [name, setName] = useState<string | null>()
  const [email, setEmail] = useState<string | null>()

  useEffect(() => {
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
  }, [])

  const handleWrapperClick = () => {
    setShowForm(!showForm);
  };

  const handleTextAreaClick = (event: React.MouseEvent<HTMLTextAreaElement>) => {
    event.stopPropagation();
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackText(event.target.value);
  };

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && feedbackText.trim().length > 0) {
      setIsSending(true);
      setFeedbackText('');
      event.currentTarget.blur(); // blur the textarea to remove focus
      try {
        
        const resp = await RestApi('/feedback', {
            text: feedbackText,
            name: name,
            from: email,
            title: 'LightSpeed Feedback'
        })
        console.log('api response', resp)
        if (resp && resp?.success) {
            if (resp.success == 'true') {
               alert('Thanks for your feedback')
            } else {
                alert(resp?.message || 'Unexpected error occured while sending feedback. Please try again!')
            }
        } else {
            alert('Unexpected error occured while sending feedback. Please try again!')
        }
        setShowForm(false)
      } catch (error) {
        console.error(error);
      } finally {
        setIsSending(false);
      }
    }
  };

  return (<>
    { (email && name) ? <div className="feedback-wrapper" onClick={handleWrapperClick}>
      <img src={isSending ? '/images/loading.png' : '/images/feedback.png'} alt="Feedback icon" style={{ width: '55%', aspectRatio: '1/1' }} />
      {showForm && (
        <div className="feedback-form">
          <textarea
            id="feedback-input"
            placeholder={isSending ? 'Sending Feedback...' : 'Please give us your feedback here'}
            value={feedbackText}
            onChange={handleTextAreaChange}
            onKeyPress={handleKeyPress}
            onClick={handleTextAreaClick}
            disabled={isSending}
          />
        </div>
      )}
    </div> :
    <></>
    }
  </>);
};

export default Feedback;
