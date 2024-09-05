import { PaymentDetails, PaymentMethod } from '../../app/payment/PaymentDetails';
import { PaymentService } from '../../app/payment/PaymentService';

describe('Payment Service', () => {
  const paymentAdapterMock = {
    processPayment: jest.fn(),
  };
  let paymentService: PaymentService;

  beforeEach(() => {
    paymentService = new PaymentService(paymentAdapterMock);
  });

  test('should successfully process a valid payment', () => {
    // ws
    //TODO: Create paymentDetails object initialized with fake data
    const CreditCard: PaymentMethod = PaymentMethod.CreditCard;
    const fakePaymentDetails: PaymentDetails = { amount: 200, currency: 'USD', method: CreditCard };
    //TODO: Create mockProcessPaymentResponse object containing success status and a fake transactiondId
    const mockProcessPaymentResponse = { status: 'success', transactionId: 'txn_1234567890' };
    //TODO: Mock processPayment implementation
    paymentAdapterMock.processPayment.mockReturnValue(mockProcessPaymentResponse);
    // Act
    const result = paymentService.makePayment(fakePaymentDetails);

    // Assert
    // Check the returned result is equal to the success message returned by makePayment with thefake  transactionId you have defined in mockProcessPaymentResponse
    expect(result).toEqual('Payment successful. Transaction ID: ${mockProcessPaymentResponse.transactionId}');
    // Check that processPayment inside makePayment has been called with paymentDetails
    expect(paymentAdapterMock.processPayment).toHaveBeenCalledWith(fakePaymentDetails);

  });

  test('should throw an error for payment failure', () => {
    // Arrange
    //TODO: Create paymentDetails object initialized with fake data
    //TODO: Create mockProcessPaymentResponse object containing failure status
    //TODO: Mock processPayment implementation
    // Act & Assert
    //expect(() => paymentService.makePayment(paymentDetails)).toThrow('Payment failed');
  });

  test('should throw an error for invalid payment amount', () => {
    // Arrange
    //TODO: Create paymentDetails object initialized with fake data where amount should be negative or undefined
    // Act & Assert
    //expect(() => paymentService.makePayment(paymentDetails)).toThrow('Invalid payment amount');
  });
});
